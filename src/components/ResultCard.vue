<template>
  <n-card class="result-card" closable @close="removeItem(card)">
    <template #header>
      <a class="result-card__url" :href="card.url" target="_blank">{{ card.url }}</a>
    </template>
    <template #default>
      <n-space vertical class="result-card__info">
        <p class="result-card__info-item">
          <span>Тематика</span>: {{card.theme}}
        </p>
        <p class="result-card__info-item">
          <span>Категория</span>: {{card.category}}
        </p>
      </n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import type {IResult} from "src/shims-vue";
import {useResultsStore} from "@/stores/results";

interface IProps {
  card: IResult,
  itemIndex: number
}
defineProps<IProps>()

const {removeItem} = useResultsStore()

</script>

<style lang="scss">
.result-card {
  height: 100%;
  &__url {
    &:hover {
      color: #D97E2A;
    }
  }
  &__info {
    &-item {
      span {
        color: #D97E2A;
      }
    }
  }
  .n-card-header__main {
    text-overflow: ellipsis;
    /* Required for text-overflow to do anything */
    white-space: nowrap;
    overflow: hidden;
  }

}


</style>
