import { ref } from 'vue';
const isMenuOpen = ref(false);
const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['router-link-exact-active']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "nav-container" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "logo" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "logo" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "logo-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "logo-dot" },
});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-links" },
    ...{ class: ({ active: __VLS_ctx.isMenuOpen }) },
});
for (const [link] of __VLS_getVForSourceType((__VLS_ctx.navigationLinks))) {
    const __VLS_4 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        ...{ 'onClick': {} },
        key: (link.path),
        to: (link.path),
        ...{ class: "nav-item" },
    }));
    const __VLS_6 = __VLS_5({
        ...{ 'onClick': {} },
        key: (link.path),
        to: (link.path),
        ...{ class: "nav-item" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_8;
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = {
        onClick: (...[$event]) => {
            __VLS_ctx.isMenuOpen = false;
        }
    };
    __VLS_7.slots.default;
    (link.name);
    var __VLS_7;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleMenu) },
    ...{ class: "menu-toggle" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hamburger" },
    ...{ class: ({ active: __VLS_ctx.isMenuOpen }) },
});
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-container']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-text']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-dot']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-links']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['hamburger']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isMenuOpen: isMenuOpen,
            navigationLinks: navigationLinks,
            toggleMenu: toggleMenu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
