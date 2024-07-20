import { modalManager } from "$lib/common/modals"
import Create from "./create.svelte"

export const openTopicCreate = () => {
  modalManager.open({
    id: "create-topic",
    component: Create
  })
}