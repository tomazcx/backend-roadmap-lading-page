<script setup lang="ts">
defineProps<{
	imgSrc: string
	title: string
	description: string
}>()
</script>

<template>
	<div>
		<div class="rounded-t-3xl bg-slate px-10 py-4">
			<img :src="imgSrc" alt="Description card svg illustration" class="mx-auto block" width="300" />
		</div>
		<div class="rounded-b-3xl bg-secondary p-8 flex flex-col gap-2">
			<strong class="text-xl">{{title}}</strong>
			<p class="text-silver">{{description}}</p>
		</div>
	</div>
</template>
