const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
    // Scenario 1: No input provided
    it("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe("0");
    });

    // Scenario 2: Partition key provided in event object
    it("Returns the partitionKey if it exists", () => {
        const event = { partitionKey: "test" };
        const partitionKey = deterministicPartitionKey(event);
        expect(partitionKey).toBe("test");
    });

    // Scenario 3: No partition key provided in event object
    it("Returns the hash of the event if it has no partitionKey", () => {
        const event = { name: "John", age: 30 };
        const partitionKey = deterministicPartitionKey(event);
        expect(partitionKey).toBeDefined();
        expect(typeof partitionKey).toBe("string");
    });

    // Scenario 4: No partition key provided in event object, and event is an object
    it("Returns the hash of stringified event if it has no partitionKey and the event is an object", () => {
        const event = { name: "John", age: 30 };
        const partitionKey = deterministicPartitionKey(event);
        const crypto = require("crypto");
        const expectedPartitionKey = crypto
            .createHash("sha3-512")
            .update(JSON.stringify(event))
            .digest("hex");
        expect(partitionKey).toBe(expectedPartitionKey);
    });

    // Scenario 5: No partition key provided in event object, and event is not an object
    it("Returns the hash of stringified data if it has no partitionKey and the event is not an object", () => {
        const data = "test data";
        const partitionKey = deterministicPartitionKey(data);
        const crypto = require("crypto");
        const expectedPartitionKey = crypto
            .createHash("sha3-512")
            .update(data)
            .digest("hex");
        expect(partitionKey).toBe(expectedPartitionKey);
    });

    // Scenario 6: Partition key is too long
    it("Returns the hash of the partitionKey if it is too long", () => {
        const longKey = "a".repeat(257);
        const partitionKey = deterministicPartitionKey({ partitionKey: longKey });
        const crypto = require("crypto");
        const expectedPartitionKey = crypto
            .createHash("sha3-512")
            .update(longKey)
            .digest("hex");
        expect(partitionKey).toBe(expectedPartitionKey);
    });
});