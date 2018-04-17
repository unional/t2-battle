# Design

This application follows the architecture best practices I have learn over the year. The main considerations are:

- [clean architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)
- Boundary separation (App vs Main)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))

## Main Partition

The purpose of main:

- kick start the application
- provide concrete implementation needed by the application

## Page and component specs referencing 'app'

Ideally, the UI (page and component) do not need to reference the application.
This allows the UI to be reusable.

The UI and application should be connected by adapters or presenters.
In `react-redux`, it is done by `mapStateToProps()` and `mapDispatchToProps()`

