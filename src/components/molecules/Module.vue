<script setup lang="ts">
import NodeSvg from "../../assets/illustrations/node-primary.svg";

defineProps<{
	title: string,
	content: string[]
}>()
</script>

<template>
	<div class="flex flex-col gap-8">
		<span class="text-3xl flex gap-4 items-center"> <img :src="NodeSvg" />{{ title }}</span>
		<ul class="list-disc ml-12">
			<li class="text-lg" v-for="topic in content" :key="topic">{{ topic }}</li>
		</ul>
	</div>
</template>
