import { html } from 'lit';
import '../src/badge-search.js';

export default {
  title: 'BadgeSearch',
  component: 'badge-search',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <badge-search
      style="--badge-search-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </badge-search>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'badge-search',
};
