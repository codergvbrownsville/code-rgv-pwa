/**
 * Offline run time installation
 */
import * as OfflineRunTime from "offline-plugin/runtime";

OfflineRunTime.install({
  onUpdateReady: () => OfflineRunTime.applyUpdate(),
  onUpdated: () => location.reload()
});
