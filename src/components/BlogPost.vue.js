import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const props = defineProps({
    destination: {
        type: Object,
        required: true,
    },
});
const navigateToDestination = () => {
    router.push(`/destinations/${props.destination.id}`);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['destination-image']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({
    ...{ onClick: (__VLS_ctx.navigateToDestination) },
    ...{ class: "blog-post" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "image-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.destination.image),
    alt: (__VLS_ctx.destination.title),
    ...{ class: "destination-image" },
    loading: (__VLS_ctx.$route && __VLS_ctx.$route.name === 'Home' && __VLS_ctx.destination.featured ? 'eager' : 'lazy'),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "location-badge" },
});
(__VLS_ctx.destination.location);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "rating-badge" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ class: "fas fa-star" },
});
(__VLS_ctx.destination.rating || '4.8');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "destination-title" },
});
(__VLS_ctx.destination.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "excerpt" },
});
(__VLS_ctx.destination.excerpt);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "meta-info" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "price" },
});
(__VLS_ctx.destination.price || '999');
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "duration" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ class: "fas fa-clock" },
});
(__VLS_ctx.destination.duration || '7 days');
/** @type {__VLS_StyleScopedClasses['blog-post']} */ ;
/** @type {__VLS_StyleScopedClasses['image-container']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-image']} */ ;
/** @type {__VLS_StyleScopedClasses['location-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['rating-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-star']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-title']} */ ;
/** @type {__VLS_StyleScopedClasses['excerpt']} */ ;
/** @type {__VLS_StyleScopedClasses['meta-info']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['duration']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-clock']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            navigateToDestination: navigateToDestination,
        };
    },
    props: {
        destination: {
            type: Object,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        destination: {
            type: Object,
            required: true,
        },
    },
});
; /* PartiallyEnd: #4569/main.vue */
