import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof Header, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "container" },
});
const __VLS_3 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
{
    const { default: __VLS_thisSlot } = __VLS_6.slots;
    const [{ Component }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_7 = {}.Transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        name: "page",
        mode: "out-in",
    }));
    const __VLS_9 = __VLS_8({
        name: "page",
        mode: "out-in",
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_10.slots.default;
    const __VLS_11 = ((Component));
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    var __VLS_10;
    __VLS_6.slots['' /* empty slot name completion */];
}
var __VLS_6;
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterView: RouterView,
            Header: Header,
            Footer: Footer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
