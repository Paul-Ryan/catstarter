![catstarter](https://github.com/Paul-Ryan/catstarter/blob/master/app/assets/images/readme/catlogo.png?raw=true)
# Catstarter

[Catstarter](https://catstarter.herokuapp.com/#/) is a [Kickstarter](https://www.kickstarter.com/) clone. It allows users to create projects seeking funding, or to fund other users' projects and receive rewards for doing so. It's built with a Rails/PostgreSQL backend and utilizes a React/Redux frontend.

It doesn't have anything to do with cats. I just called it that because cats are cool.

## Features

 * Secure login and user account creation using BCrypt hashing
 * Users can create new projects and add rewards for backers
 * Dynamic tracking and displaying current pledge count and project funding

## Dynamic progress bar
Each project has a green progress bar that fills as the money pledged to the project approaches the funding goal.

![funding bar][fundingBar]

Generating the bar can be accomplished with pure HTML and CSS, but changing the width of the bar presented a challenge because scss stylesheets aren't able to apply different width attributes dynamically.

To solve this, I used inline styling for the progress bars, passing in the width to React in an object. This method allows me to keep using a simple HTML element for the bar and update the progress each time the state is updated.

```javascript
const percentGoal = (pledgeTotal, goal) => {
  let percentWidth = (pledgeTotal / goal) * 100;
  return {
    width: `${percentWidth}%`,
    maxWidth: "100%"
  };
};
```

## Shared html form templates

To increase the DRYness of the code some similar forms were reused. The login and user sign up pages very similar components. The addition of an email field on the signup form is the main difference.

![login][login]

I was able to pass in a formType value that the forms advantage of in determining if the email field should appear.

```javascript
emailField() {
  if (this.props.formType === 'signup') {
    return (
      <label>
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.update('email')}
          />
      </label>
    );
  }
}
```

<!-- ## Image cropping in project index -->


## Features to add

 In the future, I plan to add:

  * Project categories
  * Search


[fundingBar]:https://github.com/Paul-Ryan/catstarter/blob/master/app/assets/images/readme/funding_bar.png?raw=true  
[login]:https://github.com/Paul-Ryan/catstarter/blob/master/app/assets/images/readme/logins.png?raw=true  
