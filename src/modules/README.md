# Modules directory

If we remove a feature, we can remove an entire encapsulated folder. If I want
to know where anything to do with this feature is, it's in the module folder
for that feature.

## Helpers

Pure functions only. Be strict with this rule. No side effects.

Export module functions.

## Services

Facades request and data fetching into the terminology of the application.

Export module functions.

## Models

Where are they? Well I don't really find the need to use them in my current work.

If I did have models, I would keep them in this modules folder.

## Domain aware components

Views can be small domain aware components composed of dumb components, or they
can be larger compositions of domain aware and dumb components.
