/* eslint sort-keys: error */
import { defineConfig, Giscus, useTheme } from '@theguild/components';
import { useRouter } from 'next/router';

export default defineConfig({
  docsRepositoryBase: 'https://github.com/kamilkisiela/apollo-angular/tree/master/website',
  main({ children }) {
    const { resolvedTheme } = useTheme();
    const { route } = useRouter();

    const comments = route !== '/' && (
      <Giscus
        // ensure giscus is reloaded when client side route is changed
        key={route}
        repo="kamilkisiela/apollo-angular"
        repoId="MDEwOlJlcG9zaXRvcnk1NjM1NjcwNg=="
        category="Docs Discussions"
        categoryId="DIC_kwDOA1vvYs4CSDSL"
        mapping="pathname"
        theme={resolvedTheme}
      />
    );
    return (
      <>
        {children}
        {comments}
      </>
    );
  },
  siteName: 'ANGULAR',
});
