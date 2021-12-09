import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

// This utility function enumerates all stories exported from a Storybook file
// and runs snapshot tests on each. See @storybook/testing-react for more options
// https://storybook.js.org/addons/@storybook/testing-react

function storybookSnapshotRunner(stories) {
  const testCases = Object.values(composeStories(stories)).map((Story) => {
    return [
      // The ! is necessary in Typescript only, as the property is part of a partial type
      Story.storyName,
      Story,
    ];
  });
  // Batch snapshot testing
  test.each(testCases)('Renders %s story', async (_storyName, Story) => {
    const tree = await render(<Story />);
    expect(tree.baseElement).toMatchSnapshot();
  });
}

export default storybookSnapshotRunner;
