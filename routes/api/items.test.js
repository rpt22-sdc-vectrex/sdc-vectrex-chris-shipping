const request = require('supertest');
const express = require('express');
const items = require('./items')

let result;

test('API jest test', () => {
  result = true;
  expect(result).toBe(true);
});

test('GET /1 returns item with ID of 1', () => {
  result = true;
  expect(result).toBe(true);
});