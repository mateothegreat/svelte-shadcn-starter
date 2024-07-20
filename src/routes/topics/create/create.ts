import { drawerManager } from "$lib/common/drawers";
import Manage from "../manage/manage.svelte";

export const openTopicCreate = () => {
  drawerManager.open({
    id: "topic-create",
    component: Manage,
    placement: "bottom",
    data: {
      title: "Create Topic",
      description: "Manage the topic details and settings."
    }
  });
}