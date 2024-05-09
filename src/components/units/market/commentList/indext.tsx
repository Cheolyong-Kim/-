import InfiniteScroll from "react-infinite-scroller";
import * as MCL from "./CommentList.styles";
import MarketComments from "../comments";
import type { CommentListProps } from "./CommentList.types";
import type { IQuery } from "../../../../commons/types/generated/types";
import MarketCommentAnswers from "../commentAnswers";

const MarketCommentList = (props: CommentListProps): JSX.Element => {
  const onLoadMore = (): void => {
    if (props.data === undefined) return;

    void props.fetchMore({
      variables: {
        page:
          Math.ceil((props.data.fetchUseditemQuestions.length ?? 10) / 10) + 1,
      },
      updateQuery: (
        prev: Pick<IQuery, "fetchUseditemQuestions">,
        { fetchMoreResult }: Pick<IQuery, "fetchBoardComments">,
      ) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <MCL.CommentListWrap>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions?.map((el) => (
          <MCL.CommentsWrap key={el._id}>
            <MarketComments data={el} />
            <MarketCommentAnswers id={el._id} />
          </MCL.CommentsWrap>
        ))}
      </InfiniteScroll>
    </MCL.CommentListWrap>
  );
};

export default MarketCommentList;
