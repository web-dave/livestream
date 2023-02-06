import {
  Route,
  UrlMatcher,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';

const numberRegex = '^[0-9]*$';

export const numberMatcher: UrlMatcher = (
  segments: UrlSegment[],
  group: UrlSegmentGroup,
  route: Route
): UrlMatchResult | null => {
  if (segments.length === 1 && segments[0].path.match(numberRegex)) {
    return {
      consumed: segments,
      posParams: {
        name: segments[0],
        foo: new UrlSegment('baz', {}),
      },
    };
  } else {
    return null;
  }
};
