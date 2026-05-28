---
id: "mqtt"
title: "MQTT (Message Queuing Telemetry Transport)"
category: "standard"
tags: ["mqtt", "protocol", "iot", "messaging", "cloud"]
building_types: ["office", "hospital", "mixed-use", "hotel", "retail", "data-center"]
canvas_sections: [2, 6]
last_updated: "2026-05-28"
version: "1.0"
---

## Overview

MQTT is a lightweight, publish-subscribe messaging protocol designed for constrained devices and low-bandwidth networks. Originally created by IBM for telemetry, it has become the de facto standard for IoT device communication, including smart building sensors and cloud-connected building systems.

While BACnet is the protocol of building automation controllers, MQTT is the protocol of IoT sensors, edge devices, and cloud platforms. Many modern building technology architectures use BACnet at the automation layer and MQTT for sensor-to-cloud data transport.

## Key Concepts

- **Publish/Subscribe model:** Devices publish messages to topics; other devices subscribe to topics they care about. No direct connection between sender and receiver.
- **Broker:** A central server (e.g., Mosquitto, HiveMQ, AWS IoT Core) that routes messages between publishers and subscribers.
- **Topics:** Hierarchical strings (e.g., `building/floor3/room301/temperature`) that organize messages.
- **QoS levels:** 0 (at most once), 1 (at least once), 2 (exactly once) — balancing reliability vs. overhead.
- **MQTT 5.0:** Current version, adds features like shared subscriptions, topic aliases, and session expiry.

## Why It Matters for RFIs

MQTT is relevant when evaluating IoT sensors, cloud-connected platforms, and edge computing architectures:

- **Sensor connectivity** — Ask how IoT sensors (air quality, occupancy, energy meters) transmit data. MQTT over TLS is the secure standard.
- **Cloud integration** — If vendor platforms are cloud-hosted, MQTT is likely the underlying transport. Understand the broker architecture and data flow.
- **Edge-to-cloud architecture** — Modern buildings use MQTT to stream data from edge devices to cloud analytics platforms while BACnet handles local automation.
- **Data format** — MQTT carries the message but doesn't define the payload format. Ask vendors what data format they use (JSON, Protobuf, Sparkplug B).

## RFI Questions Related to MQTT

- Do your IoT devices use MQTT for data transmission? Which version (3.1.1, 5.0)?
- Is MQTT communication encrypted (TLS/SSL)? What certificate management approach do you use?
- What MQTT broker does your platform use? Is it self-hosted or cloud-managed?
- What payload format do you use for MQTT messages (JSON, Sparkplug B, custom)?
- How does your system handle MQTT broker failover and message persistence?
- Can building owners access the MQTT broker directly for custom integrations?
