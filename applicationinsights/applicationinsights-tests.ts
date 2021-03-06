///<reference path='applicationinsights.d.ts' />
import appInsights = require("applicationinsights");

// basic use
appInsights.setup("<instrumentation_key>").start();

// basic use with auto-collection configuration
appInsights.setup("<instrumentation_key>")
    .setAutoCollectRequests(false)
    .setAutoCollectPerformance(false)
    .setAutoCollectExceptions(false)
    // no telemetry will be sent until .start() is called
    // this prevents any of the auto-collectors from initializing
    .enableVerboseLogging()
    .start();

appInsights.client.trackEvent("custom event", {customProperty: "custom property value"});
appInsights.client.trackException(new Error("handled exceptions can be logged with this method"));
appInsights.client.trackMetric("custom metric", 3);
appInsights.client.trackTrace("trace message");

// assign common properties to all telemetry
appInsights.client.commonProperties = {
    environment: "dev"
};
