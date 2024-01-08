<script setup lang="ts">
import Header from "./components/organisms/Header.vue";
import Navigation from "./components/organisms/Navigation.vue";
import Main from "./components/organisms/Main.vue";
import Description from "./components/organisms/Description.vue";
</script>

<template>
	<Header />
	<Navigation /> 
	<main class="w-11/12 max-w-screen-xl mx-auto flex flex-col gap-32 lg:gap-72">
		<Main />
		<Description />
	</main>
</template>

