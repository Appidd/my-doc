<template>
	<div class="vpLayout">
		<VPNav />
		<VPHome v-if="(frontmatter as any).home"></VPHome>
		<div v-else :class="{ vpDocLayout: true, hasSidebar: hasSidebar }">
			<div class="vpSidebar" v-if="hasSidebar">
				<div class="group" v-for="item in state.sidebarGroups" :key="item.text">
					<VPSidebarItem :item="item" :depth="0" />
				</div>
			</div>

			<div class="vpDocContent">
				<div class="vpMain" :class="{ 'vp-has-aside': asideHeaders.length }">
					<Content class="markdownContent VPDoc" />
					<VPDocAside v-show="asideHeaders.length" />
				</div>
				<VPDocFooter :class="{ 'vp-has-aside': asideHeaders.length }" />
			</div>
			<!-- <DocSidebar /> -->
		</div>
		<VPFooter v-if="!hasSidebar" />
	</div>
</template>

<script setup lang="ts">
import { shallowRef, reactive, watch, onBeforeMount, onMounted, computed, useSlots, provide, nextTick } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
import VPDocAside from 'vitepress/dist/client/theme-default/components/VPDocAside.vue'
import VPDocFooter from 'vitepress/dist/client/theme-default/components/VPDocFooter.vue'
import VPFooter from 'vitepress/dist/client/theme-default/components/VPFooter.vue'
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
import VPSidebarItem from 'vitepress/dist/client/theme-default/components/VPSidebarItem.vue'
// @ts-ignore
import { getHeaders } from 'vitepress/dist/client/theme-default/composables/outline'
import { useSidebar } from 'vitepress/theme'
// import { useLogin } from '../theme/useLogin'

const { site, theme, page, frontmatter } = useData()

const route = useRoute()
const router = useRouter()
const sidebar = useSidebar()

const slots = useSlots()
const heroImageSlotExists = computed(() => !!slots['home-hero-image'])
provide('hero-image-slot-exists', heroImageSlotExists)

const hasSidebar = computed(() => sidebar.sidebarGroups.value?.length > 0)

const asideHeaders = shallowRef<any[]>([])

const state = reactive({
	title: site.value.title,
	logo: site.value.themeConfig.logo,
	nav: theme.value.nav,
	sidebarGroups: sidebar.sidebarGroups.value,
	socialLinks: theme.value.socialLinks,
	docFooter: site.value.themeConfig.docFooter,
	footer: site.value.themeConfig.footer,
	lastUpdatedText: site.value.themeConfig.lastUpdatedText,
	lastUpdated: page.value.lastUpdated
})

watch(
	() => route,
	async () => {
		await nextTick()
		state.sidebarGroups = sidebar.sidebarGroups.value
		setAsideHeaders()
	},
	{ deep: true }
)

const setAsideHeaders = () => {
	asideHeaders.value = getHeaders(frontmatter.value.outline ?? theme.value.outline)
}

onBeforeMount(() => {
	// useLogin()
})
onMounted(() => {
	setAsideHeaders()
})
</script>

<style lang="less" scoped>
.vpLayout {
	min-height: 100vh;
	color: var(--vp-c-text-1);

	.vpSidebar {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 2;
		padding-top: var(--headerHeight);
		display: flex;
		flex-direction: column;
		width: var(--sidebarWidth);
		border-right: 1px solid var(--vp-c-divider);
		overflow: auto;

		.group {
			border-top: 1px solid var(--vp-c-divider);
			margin: 0 20px;
			// flex: 1;
			// overflow-y: auto;

			&:first-child {
				border-top: none;
			}

			// .text {
			// 	font-size: 16px;
			// 	font-weight: 600;
			// 	padding: 20px 0 8px 20px;
			// 	color: var(--vp-c-text-1);
			// }

			// .active {
			// 	color: var(--vp-c-brand) !important;
			// }

			// .items {
			// 	line-height: 28px;
			// 	padding-left: 20px;
			// 	color: var(--vp-c-text-1);
			// 	cursor: pointer;

			// 	&:hover {
			// 		color: var(--vp-c-brand);
			// 	}

			// 	&:has(div[class='item active']) {
			// 		color: var(--vp-c-brand) !important;
			// 	}

			// 	.level1 {
			// 		font-weight: 500;
			// 	}

			// 	.item {
			// 		line-height: 28px;
			// 		padding-left: 20px;
			// 		color: var(--vp-c-text-1);
			// 		cursor: pointer;
			// 	}
			// }
		}
	}

	.vpDocLayout {
		padding-top: var(--headerHeight);

		&.hasSidebar {
			padding-left: var(--sidebarWidth);
		}

		.vpDocContent {
			// width: calc(100% - var(--sidebarWidth));
			width: 100%;
			padding: 20px;
		}
	}
}
</style>
