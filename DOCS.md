# iaso-io v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	- [Authenticate with Github](#authenticate-with-github)
	- [Authenticate with Google](#authenticate-with-google)
	
- [Medicine](#medicine)
	- [Create medicine](#create-medicine)
	- [Delete medicine](#delete-medicine)
	- [Retrieve medicine](#retrieve-medicine)
	- [Retrieve medicines](#retrieve-medicines)
	- [Update medicine](#update-medicine)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

## Authenticate with Github



	POST /auth/github


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Github user accessToken.</p>							|

## Authenticate with Google



	POST /auth/google


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Google user accessToken.</p>							|

# Medicine

## Create medicine



	POST /medicines


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| med_name			| 			|  <p>Medicine's med_name.</p>							|
| description			| 			|  <p>Medicine's description.</p>							|
| dosage			| 			|  <p>Medicine's dosage.</p>							|
| prev_dose_taken			| 			|  <p>Medicine's prev_dose_taken.</p>							|
| instructions			| 			|  <p>Medicine's instructions.</p>							|
| next_dose_days			| 			|  <p>Medicine's next_dose_days.</p>							|
| next_dose_hours			| 			|  <p>Medicine's next_dose_hours.</p>							|
| next_dose_minutes			| 			|  <p>Medicine's next_dose_minutes.</p>							|
| nextDose			| 			|  <p>Medicine's nextDose.</p>							|
| dosage_times			| 			|  <p>Medicine's dosage_times.</p>							|
| doses_per_day			| 			|  <p>Medicine's doses_per_day.</p>							|
| main_usage			| 			|  <p>Medicine's main_usage.</p>							|

## Delete medicine



	DELETE /medicines/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve medicine



	GET /medicines/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve medicines



	GET /medicines


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update medicine



	PUT /medicines/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| med_name			| 			|  <p>Medicine's med_name.</p>							|
| description			| 			|  <p>Medicine's description.</p>							|
| dosage			| 			|  <p>Medicine's dosage.</p>							|
| prev_dose_taken			| 			|  <p>Medicine's prev_dose_taken.</p>							|
| instructions			| 			|  <p>Medicine's instructions.</p>							|
| next_dose_days			| 			|  <p>Medicine's next_dose_days.</p>							|
| next_dose_hours			| 			|  <p>Medicine's next_dose_hours.</p>							|
| next_dose_minutes			| 			|  <p>Medicine's next_dose_minutes.</p>							|
| nextDose			| 			|  <p>Medicine's nextDose.</p>							|
| dosage_times			| 			|  <p>Medicine's dosage_times.</p>							|
| doses_per_day			| 			|  <p>Medicine's doses_per_day.</p>							|
| main_usage			| 			|  <p>Medicine's main_usage.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's permissions.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


