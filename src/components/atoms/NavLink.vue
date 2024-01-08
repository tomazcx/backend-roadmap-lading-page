<script setup lang="ts">
defineProps<{
	label: string;
	hrefTo: string;
}>()
</script>

<template>
	<a :href="hrefTo" class="hover:text-silver text-lg transition-colors">{{label}}</a>
</template>
