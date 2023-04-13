const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function getHash(data) {
    return crypto.createHash("sha3-512").update(data).digest("hex");
}

function stringify(data) {
    if (typeof data === "string") {
        return data;
    } else {
        return JSON.stringify(data);
    }
}

function getPartitionKey(event) {
    let candidate = TRIVIAL_PARTITION_KEY;
    if (event && event.partitionKey) {
        candidate = event.partitionKey;
    } else if (event) {
        candidate = stringify(event);
        candidate = getHash(candidate);
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = getHash(candidate);
    }
    return candidate;
}

exports.deterministicPartitionKey = getPartitionKey;