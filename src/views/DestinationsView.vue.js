import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import BlogPost from '@/components/BlogPost.vue';
const store = useStore();
const searchQuery = ref('');
// Ensure proper typing for the computed property
const filteredDestinations = computed(() => {
    const destinations = store.getters.allDestinations;
    return destinations.filter((dest) => {
        return (dest.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            dest.location.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['banner']} */ ;
/** @type {__VLS_StyleScopedClasses['banner-title']} */ ;
/** @type {__VLS_StyleScopedClasses['destinations-view']} */ ;
/** @type {__VLS_StyleScopedClasses['destinations-grid']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "destinations-view" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "banner" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "banner-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "search-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    value: (__VLS_ctx.searchQuery),
    type: "text",
    placeholder: "Search destinations...",
    ...{ class: "search-input" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "all-destinations" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "destinations-grid" },
});
for (const [destination] of __VLS_getVForSourceType((__VLS_ctx.filteredDestinations))) {
    /** @type {[typeof BlogPost, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BlogPost, new BlogPost({
        key: (destination.id),
        destination: (destination),
        ...{ class: "destination-card" },
    }));
    const __VLS_1 = __VLS_0({
        key: (destination.id),
        destination: (destination),
        ...{ class: "destination-card" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
/** @type {__VLS_StyleScopedClasses['destinations-view']} */ ;
/** @type {__VLS_StyleScopedClasses['banner']} */ ;
/** @type {__VLS_StyleScopedClasses['banner-title']} */ ;
/** @type {__VLS_StyleScopedClasses['search-container']} */ ;
/** @type {__VLS_StyleScopedClasses['search-input']} */ ;
/** @type {__VLS_StyleScopedClasses['all-destinations']} */ ;
/** @type {__VLS_StyleScopedClasses['destinations-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['destination-card']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            BlogPost: BlogPost,
            searchQuery: searchQuery,
            filteredDestinations: filteredDestinations,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
