<script setup lang="ts">
defineProps<{
	iconSrc: string
}>()
</script>

<template>
	<div class="flex w-[60px] h-[60px] items-center justify-center bg-secondary rounded shadow-inner">
		<img :src="iconSrc" alt="Badge icon" class="p-4" />
	</div>
</template>
