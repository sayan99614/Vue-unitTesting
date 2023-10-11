<template>
  <div class="pomodoro">
    <h1>Pomodoro Timer</h1>
    <div class="timer">
      <p>{{ formatTime(timeLeft) }}</p>
    </div>
    <div class="controls">
      <button @click="startTimer" :disabled="isTimerRunning">Start</button>
      <button @click="pauseTimer" :disabled="!isTimerRunning">Pause</button>
      <button
        @click="resetTimer"
        :disabled="!isTimerRunning && timeLeft === totalTime"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalTime: 1500, // 25 minutes in seconds
      timeLeft: 1500, // Initial time left (25 minutes)
      isTimerRunning: false,
      timerInterval: null,
    };
  },
  methods: {
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    startTimer() {
      if (!this.isTimerRunning) {
        this.isTimerRunning = true;
        this.timerInterval = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            this.isTimerRunning = false;
            clearInterval(this.timerInterval);
            // You can trigger a break here or implement your own logic
            alert("Time is up! Take a break.");
          }
        }, 1000);
      }
    },
    pauseTimer() {
      if (this.isTimerRunning) {
        this.isTimerRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetTimer() {
      this.isTimerRunning = false;
      clearInterval(this.timerInterval);
      this.timeLeft = this.totalTime;
    },
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
};
</script>

<style scoped>
.pomodoro {
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}

.timer {
  font-size: 36px;
  margin: 20px 0;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  font-size: 16px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
