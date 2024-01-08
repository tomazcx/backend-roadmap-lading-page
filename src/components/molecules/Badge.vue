<script setup lang="ts">
import BadgeIcon from '../atoms/BadgeIcon.vue';
defineProps<{
	iconSrc: string;
	title: string;
	description: string;
}>()
</script>

<template>
	<div class="flex flex-col gap-4">
		<BadgeIcon :icon-src="iconSrc" />
		<span class="text-xl">{{title}}</span>
		<span class="text-md text-silver">{{description}}</span>
	</div>
</template>
