"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({ ...options, decodeStrings: false });

    // Stores the most recently processed character
    this.lastCharacter = null;
  }

  _write(chunk, encoding, callback) {
    try {
      if (!chunk) {
        const err = new Error("Empty input.");
        this.emit("error", err);
        return callback(err);
      }

      const input = typeof chunk === "string"
        ? JSON.parse(chunk)
        : chunk;

      // Store the most recently processed character
      this.lastCharacter = input;

      // Reuse stored instance-level character for output
      const formatted =
        `Class: ${this.lastCharacter.class}\n` +
        `Gender: ${this.lastCharacter.gender}\n` +
        `Fun Fact: ${this.lastCharacter.funFact}\n`;

      // Simulate async processing delay before pushing output
      setTimeout(() => {
        this.push(formatted);
        callback();
        // Delay can produce race conditions, also while waiting for the delay to finish more writes can come in changing the lastCharacter
      }, 100);

    } catch (err) {
      this.emit("error", err);
      callback(err);
    }
  }

  _read() {}

}

module.exports = { CharacterCreator };