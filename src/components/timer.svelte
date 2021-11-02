<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';
	export let timeProp: number;
	export let sessionNameProp: string;
	export let isTimerStarted: boolean = false;

	let actBtnName: string = 'Start';

	let minSecondValue: number = 0,
		minHourValue: number = 0,
		maxSecondValue: number = 9;

	let secondClockValue: number = minSecondValue;
	let timerCallback: any;

	$: hourClockValue = timeProp ?? 0;

	function timeCalculation(): void {
		if (hourClockValue === minHourValue && secondClockValue === minSecondValue) {
			clearInterval(timerCallback);
			toast.push('Timer Finished', {
				theme: {
					'--toastBackground': '#48BB78',
					'--toastBarBackground': '#2F855A'
				}
			});
			actBtnName = 'Start';
		} else if (secondClockValue === minSecondValue) {
			hourClockValue--;
			secondClockValue = maxSecondValue;
		} else secondClockValue--;
	}

	function actBtnFunc(): void {
		if (isTimerStarted) {
			actBtnName = 'Start';
			clearInterval(timerCallback);
			toast.push('Timer Stoped!', {
				theme: {
					'--toastBackground': '#F56565',
					'--toastBarBackground': '#C53030'
				}
			});
		} else {
			actBtnName = 'Stop';
			timerCallback = setInterval(timeCalculation, 1000);
		}
		isTimerStarted = !isTimerStarted;
	}

	function resetTimer(): void {
		clearInterval(timerCallback);
		hourClockValue = timeProp;
		secondClockValue = 0;
		isTimerStarted = false;
		actBtnName = 'Start';
		toast.push('Reset', {
			theme: {
				'--toastBackground': '#4169e1',
				'--toastBarBackground': '#00ccff'
			}
		});
	}
</script>

<div class="rounded overflow-hidden">
	<div>
		<div class="px-6 py-4 text-center dark:text-white">
			<div class="font-bold text-4xl mb-14">{sessionNameProp}</div>
			<p>
				<span class="p-7 border-2 text-7xl">{hourClockValue}</span>
				<span class="p-7 border-2 text-7xl">{secondClockValue}</span>
			</p>
		</div>
		<div class="px-6 pt-12 pb-2 text-center">
			<button
				class="bg-green-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				on:click={actBtnFunc}>{actBtnName}</button
			>
			<button
				class="bg-blue-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				on:click={resetTimer}>Reset</button
			>
		</div>
	</div>
</div>
