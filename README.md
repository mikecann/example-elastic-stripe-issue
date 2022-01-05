# example-elastic-stripe-issue

This repo demonstrates the issue of using elastic-apm AND stripe while using esbuild

## Setup

1. Copy and rename `.env.example` to `.env` and fill in the missing required env vars
2. Run `yarn dev` to build and run

## Suspected Problem

I think the issue is to do with the way esbuild bundles the dependencies together, but im not sure.
