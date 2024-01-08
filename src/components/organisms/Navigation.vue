<script setup lang="ts">
import NavLink from "../atoms/NavLink.vue"
import {ref} from "vue"

const links = ref([
	{
		label: "Descrição",
		hrefTo: "#description"
	},
	{
		label: "Salário médio de um desenvolvedor",
		hrefTo: "#meanSalary"
	},
	{
		label: "Conteúdo do guia",
		hrefTo: "#content"
	},{
		label: "Perguntas Frequentes",
		hrefTo: "#Q&A"
	},

])
</script>

<template>
	<nav class="flex items-center justify-between pt-36 w-11/12 max-w-screen-xl mx-auto">
		<NavLink :key="link.label" :href-to="link.hrefTo" :label="link.label"  v-for="link in links" />
	</nav>
</template>
