import { ref } from 'vue';
const email = ref('');
const subscribe = () => {
    alert(`Thanks for subscribing, ${email.value}!`);
    email.value = '';
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['newsletter-section']} */ ;
/** @type {__VLS_StyleScopedClasses['social-links']} */ ;
/** @type {__VLS_StyleScopedClasses['newsletter-form']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({
    ...{ class: "footer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "footer-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "footer-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
    ...{ class: "footer-heading" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "footer-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "social-links" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#",
    ...{ class: "social-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ class: "fab fa-instagram" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#",
    ...{ class: "social-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ class: "fab fa-twitter" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#",
    ...{ class: "social-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ class: "fab fa-pinterest" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "footer-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
    ...{ class: "footer-subheading" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/destinations",
    ...{ class: "footer-link" },
}));
const __VLS_2 = __VLS_1({
    to: "/destinations",
    ...{ class: "footer-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
const __VLS_4 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    to: "/about",
    ...{ class: "footer-link" },
}));
const __VLS_6 = __VLS_5({
    to: "/about",
    ...{ class: "footer-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
var __VLS_7;
const __VLS_8 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    to: "/contact",
    ...{ class: "footer-link" },
}));
const __VLS_10 = __VLS_9({
    to: "/contact",
    ...{ class: "footer-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "footer-section newsletter-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
    ...{ class: "footer-subheading" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.subscribe) },
    ...{ class: "newsletter-form" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "email",
    placeholder: "Enter your email",
    ...{ class: "newsletter-input" },
    required: true,
});
(__VLS_ctx.email);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
    ...{ class: "newsletter-button" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "footer-bottom" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-content']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-section']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-heading']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-text']} */ ;
/** @type {__VLS_StyleScopedClasses['social-links']} */ ;
/** @type {__VLS_StyleScopedClasses['social-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['fab']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-instagram']} */ ;
/** @type {__VLS_StyleScopedClasses['social-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['fab']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-twitter']} */ ;
/** @type {__VLS_StyleScopedClasses['social-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['fab']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-pinterest']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-section']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-subheading']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-link']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-link']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-link']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-section']} */ ;
/** @type {__VLS_StyleScopedClasses['newsletter-section']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-subheading']} */ ;
/** @type {__VLS_StyleScopedClasses['newsletter-form']} */ ;
/** @type {__VLS_StyleScopedClasses['newsletter-input']} */ ;
/** @type {__VLS_StyleScopedClasses['newsletter-button']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-bottom']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            email: email,
            subscribe: subscribe,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
