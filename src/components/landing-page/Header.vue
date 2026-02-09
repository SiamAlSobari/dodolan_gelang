<template>
  <header class="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="shrink-0">
          <h1 class="text-2xl font-bold text-pink-600">BraceletShop</h1>
        </div>

        <!-- Navigation Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-700 hover:text-pink-600 transition-colors">Products</a>
          <a href="#" class="text-gray-700 hover:text-pink-600 transition-colors">Collections</a>
          <a href="#" class="text-gray-700 hover:text-pink-600 transition-colors">About</a>
          <a href="#" class="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
        </div>

        <!-- CTA Buttons -->
        <div class="flex items-center space-x-4">
          <button
            class="hidden sm:block px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors"
          >
            Sign In
          </button>
          <button
            class="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button class="text-gray-700 hover:text-pink-600">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup></script>
