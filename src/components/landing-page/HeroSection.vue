<template>
  <section class="relative  overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Most Powerful Way To
            <span class="text-pink-600"> Connect Every Audience</span>
          </h1>

          <p class="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Since 2004, our technology has helped customers all over the world harness the
            incredible power of video – we even won two Technology
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              class="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started — For Free!
            </button>
            <button
              class="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-full font-semibold hover:border-pink-600 hover:text-pink-600 transition-all"
            >
              Book A Demo
            </button>
          </div>
        </div>

        <!-- Right Content - Image Grid -->
        <div class="relative">
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="image in images"
              :key="image.id"
              :class="[
                'relative rounded-3xl overflow-hidden',
                image.gradient,
                image.colSpan,
                image.aspectRatio,
              ]"
            >
              <!-- Badge Live -->
              <div
                v-if="image.badge"
                class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
              >
                {{ image.badge }}
              </div>

              <!-- Tutorial Badge -->
              <div
                v-if="image.tutorial"
                class="absolute bottom-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2"
              >
                <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                {{ image.tutorial }}
              </div>

              <!-- Stats -->
              <div
                v-if="image.stats"
                class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl"
              >
                <p class="text-2xl font-bold text-gray-900">{{ image.stats.value }}</p>
                <p class="text-sm text-gray-600">{{ image.stats.label }}</p>
              </div>

              <!-- Center Circle -->
              <div
                v-if="image.centerCircle"
                class="absolute inset-0 flex items-center justify-center"
              >
                <div :class="image.centerCircle"></div>
              </div>

              <!-- Play Button -->
              <div
                v-if="image.playButton"
                class="absolute inset-0 flex items-center justify-center"
              >
                <div
                  class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg class="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <!-- Navigation Icons -->
              <div v-if="image.navigation" class="absolute top-4 flex gap-2 w-full px-4">
                <div class="bg-white rounded-full p-2 shadow-lg">
                  <svg
                    class="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
                <div class="ml-auto bg-white rounded-full p-2 shadow-lg">
                  <svg
                    class="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <!-- Wide Image Bottom Controls -->
              <template v-if="image.wideControls">
                <div
                  class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  <svg class="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Tutorials
                </div>
                <div
                  class="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 hover:bg-pink-50 transition-colors cursor-pointer"
                >
                  <span class="text-sm font-semibold text-gray-900">View Product</span>
                  <svg
                    class="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div class="absolute bottom-4 left-4 flex gap-3">
                  <button
                    class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-pink-50 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button
                    class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-pink-50 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </template>
            </div>
          </div>

          <!-- Floating Elements -->
          <div
            class="absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full opacity-50 blur-2xl animate-pulse"
          ></div>
          <div
            class="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300 rounded-full opacity-50 blur-2xl animate-pulse delay-1000"
          ></div>
        </div>
      </div>
    </div>

    <!-- Background Pattern -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  {
    id: 1,
    gradient: 'bg-gradient-to-br from-pink-200 to-orange-200',
    colSpan: '',
    aspectRatio: 'aspect-square',
    centerCircle: 'w-32 h-32 bg-pink-400 rounded-full opacity-50',
  },
  {
    id: 2,
    gradient: 'bg-gradient-to-br from-blue-200 to-purple-200',
    colSpan: '',
    aspectRatio: 'aspect-square',
    navigation: true,
    tutorial: 'Tutorials',
  },

  {
    id: 5,
    gradient: 'bg-gradient-to-br from-yellow-200 to-orange-200',
    colSpan: 'col-span-2',
    aspectRatio: 'aspect-[2/1]',
    wideControls: true,
  },
])
</script>
