<script setup lang="ts">
defineProps<{
	label: string
	hrefTo: string
}>()
</script>

<template>
	<a :href="hrefTo" class="py-4 px-12 text-center lg:px-36 bg-primary text-white rounded-lg font-bold text-md lg:text-xl hover:bg-primary-dark trasition-colors">{{label}}</a>
</template>
