# Application

Larger apps will tend to group concerns by modules rather than a folder named
by file type inside.

However, I think that with this pattern, keeping your services together is no
different from how you would structure an API.

We have three main application files.

- `bootstrap` - configuration, completely hard coupled to the domain.
- `controller` - mounts apps/views/components. Couples UI events to business logic. Export a class.
- `service` - facades api calls or data requests (like browser storage). Export module functions.
- `helper` - only pure functions. Export module functions.


## Why is the application still so dumb?

While I could import a controller into App.svelte, which would mean
one less level to pass events out, I would be providing an easy way for
developers to add more code into this file.

I don't want that. I want this as simple as possible, so I use a subset
of the Svelte features. For some, this is overkill, but they have not yet
been humbled by time and consequence or any **significant
failure**.

With this pattern, the view is entirely removable and so loosely coupled that
I could develop a completely different view that has the same interfaces and
events, and swap them out at will like unplugging a keyboard and plugging a
new one in.
