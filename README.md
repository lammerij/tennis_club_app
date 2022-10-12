# Tennis Club Reviewer App

## Description

Create an account to login and leave reviews for Tennis Clubs you've patroned. This app utilizes React/JS for the frontend, and Ruby/Rails for the backend.

<img width="434" alt="Screen Shot 2022-10-12 at 2 52 37 PM" src="https://user-images.githubusercontent.com/56732905/195426805-fa357df8-5267-4f5c-ba93-b59f6a602a4d.png">


## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm


## Installation

Start by **cloning** the repository

```
git clone https://github.com/lammerij/tennis_club_app.git
```

cd tennis-club-app

## Backend Setup

Check your verson of ruby

```
ruby -v
```

The output should start with ruby 2.7.

```
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site
for the latest supported versions.

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```
