// Custom Marker Web Component (ported from PSV demos)

export class CustomMarkerElement extends HTMLElement {
    constructor() {
        super();

        this.fmt = new Intl.NumberFormat({ maximumSignificantDigits: 4 });

        const dom = this.attachShadow({ mode: 'closed' });

        const style = document.createElement('style');
        style.innerText = `
:host {
    display: block;
    position: relative;
    width: 25px;
    height: 25px;
}

button {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background: none;
    color: white;
    border-radius: 50%;
    filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.2));
    cursor: pointer;
}

.tooltip {
    box-sizing: border-box;
    width: 300px;
    position: absolute;
    bottom: calc(100% + 10px);
    left: calc(50% - 150px);
    background: rgba(30, 30, 30, 0.8);
    color: white;
    text-shadow: 0 1px #000;
    border-radius: 10px;
    transform-origin: 50% calc(100% + 35px);
    transform: rotate(30deg);
    opacity: 0;
    pointer-events: none;
    z-index: 100;
}
.tooltip.bottom {
    bottom: auto;
    top: calc(100% + 10px);
    transform-origin: 50% -35px;
}

.tooltip.hovered {
    animation: rotate-bounce-out 200ms ease forwards;
}

::slotted(img) {
    width: 100%;
    border-radius: 10px 10px 0 0;
    display: block;
}
::slotted(h2),
::slotted(p) {
    margin: 1rem;
    padding: 0 10px;
    text-align: center;
}
.tooltip pre {
    font-size: 0.8em;
    margin: 1rem;
    white-space: pre-wrap;
    word-break: break-all;
}

.tooltip::after {
    content: '';
    width: 0px;
    height: 0px;
    color: rgba(30, 30, 30, 0.8);
    border: 10px solid transparent;
    border-top-color: currentColor;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
}
.tooltip.bottom::after {
    border-top-color: transparent;
    border-bottom-color: currentColor;
    top: auto;
    bottom: 100%;
}

button:hover {
    animation: ripple 1s ease-out;
}

.tooltip.hiding {
    animation: hide 200ms ease forwards;
}

button:hover + .tooltip {
    animation: show 300ms ease forwards;
}

@keyframes ripple {
    0% { box-shadow: 0 0 0 0 rgba(97, 170, 242, 0); }
    20% { box-shadow: 0 0 0 5px rgba(97, 170, 242, 1); }
    100% { box-shadow: 0 0 0 20px rgba(97, 170, 242, 0); }
}
@keyframes show {
    0% { transform: rotate(30deg); opacity: 0; }
    70% { transform: rotate(-10deg); }
    100% { transform: rotate(0deg); opacity: 1; }
}
@keyframes hide {
    0% { transform: rotate(0deg); opacity: 1; }
    100% { transform: rotate(30deg); opacity: 0; }
}
`;
        dom.appendChild(style);

        const tooltipId = 'tooltip-' + Math.random().toString(36).substring(2, 9);

        this.button = document.createElement('button');
        this.button.setAttribute('aria-label', 'Toggle details');
        this.button.setAttribute('aria-expanded', 'false');
        this.button.setAttribute('aria-describedby', tooltipId);
        this.button.innerHTML = `<svg viewBox="0 0 100 100">
<circle cx=50 cy=50 r=25 fill="currentColor"/>
<circle cx=50 cy=50 r=40 stroke-width=10 fill="none" stroke="currentColor"/>
</svg>`;
        dom.appendChild(this.button);

        this.tooltip = document.createElement('div');
        this.tooltip.id = tooltipId;
        this.tooltip.classList.add('tooltip');
        dom.appendChild(this.tooltip);
        this.tooltip.innerHTML = '<slot></slot>';

        this.isTooltipVisible = false;

        this.handleMouseLeave = () => {
            if (!this.isTouchInteracting) {
                this.tooltip.classList.add('hiding');
                this.button.setAttribute('aria-expanded', 'false');
                this.isTooltipVisible = false;
            }
        };

        this.handleMouseEnter = () => {
            if (!this.isTouchInteracting) {
                this.button.setAttribute('aria-expanded', 'true');
                this.isTooltipVisible = true;
            }
        };

        this.handleTouchStart = (e) => {
            this.isTouchInteracting = true;
            // Prevent event from bubbling up to PSV and causing immediate deselection
            e.stopPropagation();
            
            if (this.isTooltipVisible) {
                this.tooltip.classList.add('hiding');
                this.button.setAttribute('aria-expanded', 'false');
                this.isTooltipVisible = false;
                this.button.blur(); // Remove pseudo-hover state
            } else {
                this.tooltip.classList.remove('hiding');
                this.button.setAttribute('aria-expanded', 'true');
                this.isTooltipVisible = true;
                this.button.focus(); // Force hover state for animation
            }
        };

        this.handleAnimationEnd = () => {
            this.tooltip.classList.remove('hiding');
        };

        this.button.addEventListener('mouseleave', this.handleMouseLeave);
        this.button.addEventListener('mouseenter', this.handleMouseEnter);
        this.button.addEventListener('touchstart', this.handleTouchStart);
        dom.addEventListener('animationend', this.handleAnimationEnd);
    }

    disconnectedCallback() {
        this.button.removeEventListener('mouseleave', this.handleMouseLeave);
        this.button.removeEventListener('mouseenter', this.handleMouseEnter);
        this.button.removeEventListener('touchstart', this.handleTouchStart);
        this.shadowRoot.removeEventListener('animationend', this.handleAnimationEnd);
    }

    updateMarker({ marker, position, viewerPosition, zoomLevel, viewerSize }) {
        this.tooltip.classList.toggle('bottom', position.y < viewerSize.height / 3);
    }
}

// register the custom element
customElements.define('custom-marker', CustomMarkerElement);
