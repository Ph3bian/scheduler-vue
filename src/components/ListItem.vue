<template>
  <div class="ListItemImage">
    <!-- {images && images.length > 0 && (
    <img src="{images" && images[0]} alt="{alt}" />
    )} -->
  </div>
  <div class="ListItemDescription">
    <h2>{title}</h2>
    <p>{{ `${address.street}, ${address.city}, ${address.country} ` }}</p>
    <span>
      {{ contacts?.main?.firstName || "" }} {{ contacts?.main?.lastName || "" }}
    </span>
  </div>
  <div class="ListItemArrow">
    <ChevronRight />
  </div>
</template>

