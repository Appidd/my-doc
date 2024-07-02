<template>
	<div class="vpDocSidebar">
		<div class="title">{{ outlineTitle }}2</div>
	</div>
</template>

<script setup lang="ts">
import { useData, useRoute, useRouter } from 'vitepress'

const data = useData()
const route = useRoute()
const router = useRouter()

const { outlineTitle } = data.site.value.themeConfig
</script>

<style scoped lang="less">
.vpDocSidebar {
	position: fixed;
	top: calc(var(--headerHeight) + 20px);
	right: 0;
	z-index: 2;
	width: var(--sidebarWidth);
	min-height: 100px;
	border-left: 1px solid var(--borderColor);
}
</style>
