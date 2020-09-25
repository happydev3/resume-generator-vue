import Vue from 'vue';
import store from './store';

export default function(componentName, ChildComponent, stringStyles) {
    const id = `${componentName}__resume`;

    Vue.component(componentName, {
        render(h) {
            const style = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '900px',
                height: this.height + 'px',
                'min-height': '1240px',
                transform: `scale(${this.$attrs.scale})`,
                'transform-origin': '0px 0px',
                'background-color': 'rgb(255, 255, 255)',
                'pointer-events': 'none',
                opacity: 1,
                "border-radius": '25px',
                'border-width': 'initial',
                'border-style': 'none',
                'border-color': 'initial',
                'border-image': 'initial',
            };
            return h('iframe', {
                on: {
                    load: () => {
                        this.renderChildren();
                    },
                },
                class: ['body--preview'],
                style,
                attrs: {
                    id,
                    'data-type': 'resume-iframe',
                },
            });
        },
        data() {
            return {
                height: 0,
            };
        },
        mounted() {
            const head = this.$el.contentDocument.head;
            const styleTag = document.createElement('style');
            window.store = this.$store;
            styleTag.innerHTML = stringStyles;
            head.appendChild(styleTag);
            const self = this;
            setInterval(() => {
                self.setIframeHeight();
            }, 100);
        },
        beforeUpdate() {
            //freezing to prevent unnessessary Reactifiation of vNodes
            this.setIframeHeight();
            // this.iApp.children = Object.freeze(this.$slots.default);
        },
        methods: {
            setIframeHeight() {
                const body = this.$el && this.$el.contentDocument && this.$el.contentDocument.body;
                this.height = body && body.getBoundingClientRect().height;
            },

            renderChildren() {
                const children = <ChildComponent/> ;
                const body = this.$el.contentDocument.body;
                const el = document.createElement('DIV'); // we will mount or nested app to this element
                body.appendChild(el);

                const iApp = new Vue({
                    name: 'iApp',
                    //freezing to prevent unnessessary Reactifiation of vNodes
                    data: { children: Object.freeze(children) },
                    store,
                    render() {
                        return ( <div><ChildComponent/></div>);
                    },
                });

                iApp.$mount(el); // mount into iframe

                this.iApp = iApp; // cache instance for later updates
            },
        },
    });
}