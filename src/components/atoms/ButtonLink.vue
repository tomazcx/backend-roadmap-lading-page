<script setup lang="ts">
defineProps<{
	label: string
	hrefTo: string
}>()
</script>

<template>
	<a :href="hrefTo" class="py-4 text-center px-36 bg-primary text-white rounded-lg font-bold text-xl hover:bg-primary-dark trasition-colors">{{label}}</a>
</template>
