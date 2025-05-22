import { datadogLogs } from "@datadog/browser-logs";
import { datadogRum } from "@datadog/browser-rum";

datadogLogs.init({
  clientToken: "pubb3f5092fdcf36d52721d9b0d44b0f7b7",
  site: "datadoghq.com", // Or 'datadoghq.eu' if your Datadog org is EU-based
  service: "quizer-frontend",
  env: "production", // or 'dev', 'staging'
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
});

datadogRum.init({
  applicationId: "581f1740-b4e6-43d1-b4cd-1f15c49fa2e8",
  clientToken: "pubb3f5092fdcf36d52721d9b0d44b0f7b7",
  site: "datadoghq.com",
  service: "quizer-frontend",
  env: "production",
  sampleRate: 100,
  sessionReplaySampleRate: 20,
  startSessionReplayRecordingManually: true,
  trackInteractions: true,
});

datadogRum.startSessionReplayRecording();

export { datadogLogs };
