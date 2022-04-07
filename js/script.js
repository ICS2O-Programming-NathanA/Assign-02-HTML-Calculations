// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates how much the person should bench press at the untrained level (male).
 */
function calculateUntrainedMale () {
  // input
  const weight = parseInt(document.getElementById('weight-of-male-untrained').value)

	// process
	const untrained = 0.7456
  const benchpress = (weight * untrained)
	
  // output
  document.getElementById('untrainedMale').innerHTML = 'You should bench press around: ' + benchpress.toFixed(2) + 'lbs'
}

/**
 * This function calculates how much the person should bench press at the intermediate level (male).
 */
function calculateIntermediateMale () {
	// input
  const weight = parseInt(document.getElementById('weight-of-male-intermediate').value)

	// process
	const untrained = 1.1403
  const benchpress = (weight * untrained)

  // output
  document.getElementById('intermediateMale').innerHTML = 'You should bench press around: ' + benchpress.toFixed(2) + 'lbs'
}

/**
 * This function calculates how much the person should bench press at the untrained level (female).
 */
function calculateUntrainedFemale () {
	// input
  const weight = parseInt(document.getElementById('weight-of-female-untrained').value)

	// process
	const untrained = 0.5154
  const benchpress = (weight * untrained)

  // output
  document.getElementById('untrainedFemale').innerHTML = 'You should bench press around: ' + benchpress.toFixed(2) + 'lbs'
}

/**
 * This function calculates how much the person should bench press at the intermediate level (female).
 */
function calculateIntermediateFemale () {
	// input
  const weight = parseInt(document.getElementById('weight-of-female-intermediate').value)

	// process
	const untrained = 0.7894
  const benchpress = (weight * untrained)

  // output
  document.getElementById('intermediateFemale').innerHTML = 'You should bench press around: ' + benchpress.toFixed(2) + 'lbs'
}