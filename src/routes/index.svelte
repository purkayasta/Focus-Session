<script lang="ts">
	import { SessionFactory } from '../factory/SessionFactory';
	import TimerComponent from '../components/timer.svelte';

	let sessionTypes = new SessionFactory().totalRules();

	let sessionTime: Number;

	function sessionStart(time: Number) {
		console.log(time);
		sessionTime = time;
	}
</script>

<body>
	<div class="flex place-content-center p-10 space-x-10">
		{#each sessionTypes as sessions}
			<button
				on:click={() => sessionStart(sessions.limit)}
				class="transition ease-in duration-700 p-2 bg-{sessions.color}-600 hover:bg-{sessions.hoverColor}-700 text-white font-bold py-2 px-4 rounded"
			>
				{sessions.name}
			</button>
		{/each}
	</div>

	<TimerComponent endTime={sessionTime} />
</body>
