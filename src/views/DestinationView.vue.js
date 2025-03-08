import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const route = useRoute();
const store = useStore();
const destination = ref(null);
onMounted(async () => {
    const dest = store.state.destinations.find((d) => d.id === Number(route.params.id));
    if (dest) {
        destination.value = dest;
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['destination-view']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-title']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-image-container']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "destination-view" },
});
if (__VLS_ctx.destination) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: "destination-title" },
    });
    (__VLS_ctx.destination.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "destination-image-container" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.destination.image),
        alt: (__VLS_ctx.destination.title),
        ...{ class: "destination-image" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "destination-content" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "destination-description" },
    });
    (__VLS_ctx.destination.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "destination-meta" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "location" },
    });
    (__VLS_ctx.destination.location);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "price" },
    });
    (__VLS_ctx.destination.price || '999');
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "not-found" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: "/destinations",
        ...{ class: "back-link" },
    }));
    const __VLS_2 = __VLS_1({
        to: "/destinations",
        ...{ class: "back-link" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_3.slots.default;
    var __VLS_3;
}
/** @type {__VLS_StyleScopedClasses['destination-view']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-title']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-image-container']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-image']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-content']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-description']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-meta']} */ ;
/** @type {__VLS_StyleScopedClasses['location']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['not-found']} */ ;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            destination: destination,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
