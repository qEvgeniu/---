import {BasePrivateButtonExecutor} from "../../../core/classes/impl/executors/BasePrivateButtonExecutor";
import {PrivateButtonEvent} from "../../../core/classes/impl/events/PrivateButtonEvent";
import {Some} from "../../../core/types/Some";
import {PrivateButtonRouting} from "../../../core/annotations/routing/PrivateButtonRouting";
import {Session} from "../../../core/namespaces/Session";
import {Color} from "../../../core/classes/impl/enums/Color";
import {Messages} from "../../../core/namespaces/Messages";

@PrivateButtonRouting('cancel')
export class CancelButton extends BasePrivateButtonExecutor {

    public override async execute(message: PrivateButtonEvent): Some {
        Session.EDIT_STATS.delete(message.sender.userId)
        Session.SUGGESTIONS.delete(message.sender.userId)
        await message.editMessage({
            message: `Отменено!`
        }, Messages.TO_STATISTIC(message.sender.userId))
    }

}