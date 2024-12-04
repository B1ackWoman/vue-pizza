<template>
  <div class="fixed z-20" >
    <div class="fixed w-full h-full bg-black opacity-50">
    </div>
    <div class="fixed h-full w-full max-w-[400px] bg-slate-50 right-0 rounded-md">
      <div class="flex justify-between">
        <div>
          <span>В корзине</span>
          <span>3 товара</span>
        </div>
        <div class="relative group cursor-pointer top-0 right-0 w-10 h-10 ">
          <span class="absolute w-7 border-b border-2 border-black right-5 top-4 rotate-45  group-hover:scale-x-125 transtion duration-200"></span>
          <span class="absolute w-7 border-b border-2 border-black right-5 top-4 -rotate-45  group-hover:scale-x-125 transtion duration-200"></span>
        </div>
      </div>
    </div>
  </div>
</template>
