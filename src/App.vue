<script setup lang="ts">
import Header from "./components/organisms/Header.vue";
import Navigation from "./components/organisms/Navigation.vue";
import Main from "./components/organisms/Main.vue";
import Description from "./components/organisms/Description.vue";
import DeveloperSalary from "./components/organisms/DeveloperSalary.vue";
import Modules from "./components/organisms/Modules.vue";
import Questions from "./components/organisms/Questions.vue";
import BottomContainer from "./components/organisms/BottomContainer.vue";
</script>

<template>
	<Header />
	<Navigation /> 
	<main class="w-11/12 max-w-screen-xl mx-auto flex flex-col mb-36 gap-32 lg:gap-72">
		<Main />
		<Description />
		<DeveloperSalary />
		<Modules />
		<Questions />
		<BottomContainer />
	</main>
</template>

